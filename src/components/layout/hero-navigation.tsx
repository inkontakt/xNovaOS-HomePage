'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { ChevronRightIcon, CircleSmallIcon, MenuIcon } from 'lucide-react'

// Custom useMedia hook for Astro
const useMedia = (query: string, defaultState: boolean = false) => {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') return defaultState

    return window.matchMedia(query).matches
  })

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)

    const onChange = () => {
      if (!mounted) return
      setState(mql.matches)
    }

    mql.addEventListener('change', onChange)

    return () => {
      mounted = false
      mql.removeEventListener('change', onChange)
    }
  }, [query])

  return state
}

import { useActiveSection } from '@/hooks/use-active-section'
import { GlassButton } from '@/components/ui/glass-button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet'
import Neural from '@/assets/svg/neural'

import { cn } from '@/lib/utils'

type NavigationSection = {
  type: 'section'
  title: string
  items: NavigationItem[]
}

type NavigationItem = {
  title: string
  href: string
  icon?: ReactNode
  badge?: ReactNode
  description?: string
}

type Navigation = {
  title: string
  contentClassName?: string
} & (
  | {
      items: NavigationSection[]
      splitItems: true
      href?: never
    }
  | {
      items: NavigationItem[]
      splitItems?: never | false
      href?: never
    }
  | {
      items?: never
      splitItems?: never
      href: string
    }
)

const ListItem = (props: {
  title: NavigationItem['title']
  href: NavigationItem['href']
  icon?: NavigationItem['icon']
  badge?: NavigationItem['badge']
  description?: NavigationItem['description']
  splitItems?: boolean
  activeSection?: string
  currentPathname?: string
}) => {
  const { title, href, icon, badge, description, splitItems, activeSection, currentPathname } = props

  // Determine if this is a page route or hash route
  const isPageRoute = href.startsWith('/') && !href.includes('#')
  const isHashRoute = href.includes('#')

  // Extract section id from href (e.g., '/#hero' -> 'hero' or '#hero' -> 'hero')
  const sectionId = href.startsWith('/#') ? href.slice(2) : href.startsWith('#') ? href.slice(1) : ''

  // For page routes, match against current pathname; for hash routes, match against active section
  const isActive = isPageRoute ? currentPathname === href : isHashRoute && sectionId && activeSection === sectionId

  return (
    <li className={cn({ 'h-19.5': description && splitItems })}>
      <NavigationMenuLink
        asChild
        data-active={isActive}
        className={cn(
          'bg-transparent! ease-in-out hover:text-white focus:text-white focus-visible:ring-0 focus-visible:outline-0 data-[active=true]:text-white',

          //Hover
          'hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
          'hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:backdrop-blur-md',

          // Active

          //Hover
          'data-[active=true]:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
          'data-[active=true]:bg-linear-to-r data-[active=true]:from-white/15 data-[active=true]:to-white/25 data-[active=true]:backdrop-blur-md',

          { 'flex flex-row items-start gap-2': icon }
        )}
      >
        <a href={href}>
          {icon && (
            <span className='flex aspect-square size-7.5 shrink-0 items-center justify-center rounded-sm border bg-white [&>svg]:size-4.5 [&>svg]:text-black!'>
              {icon}
            </span>
          )}
          {description ? (
            <div className='grow space-y-1'>
              <div className={cn({ 'flex items-center gap-1.5': badge })}>
                <h6 className='font-medium text-white'>{title}</h6>
                {badge}
              </div>
              <p className='line-clamp-2 text-white/70'>{description}</p>
            </div>
          ) : (
            <div className={cn('grow', { 'flex items-center gap-1.5': badge })}>
              <h6 className='font-medium text-white'>{title}</h6>
              {badge}
            </div>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
}

const HeroNavigation = ({
  navigationData,
  navigationClassName,
  currentPathname = '/'
}: {
  navigationData: Navigation[]
  navigationClassName?: string
  currentPathname?: string
}) => {
  // Extract all section IDs from navigation data
  const sectionIds = navigationData.flatMap(navItem => {
    if (navItem.href) {
      const id = navItem.href.startsWith('/#')
        ? navItem.href.slice(2)
        : navItem.href.startsWith('#')
          ? navItem.href.slice(1)
          : ''

      return id ? [id] : []
    }

    if (navItem.items) {
      if (navItem.splitItems) {
        return navItem.items.flatMap(section =>
          section.items
            .map(item => {
              const id = item.href.startsWith('/#')
                ? item.href.slice(2)
                : item.href.startsWith('#')
                  ? item.href.slice(1)
                  : ''

              return id
            })
            .filter(Boolean)
        )
      }

      return navItem.items
        .map(item => {
          const id = item.href.startsWith('/#')
            ? item.href.slice(2)
            : item.href.startsWith('#')
              ? item.href.slice(1)
              : ''

          return id
        })
        .filter(Boolean)
    }

    return []
  })

  const activeSection = useActiveSection(sectionIds, currentPathname)

  return (
    <NavigationMenu viewport={false} className={cn(navigationClassName)}>
      <NavigationMenuList className='flex-wrap gap-6'>
        {navigationData.map(navItem => {
          if (navItem.href) {
            // Root link item
            const isPageRoute = navItem.href.startsWith('/') && !navItem.href.includes('#')

            const sectionId = navItem.href.startsWith('/#')
              ? navItem.href.slice(2)
              : navItem.href.startsWith('#')
                ? navItem.href.slice(1)
                : ''

            const isActive = isPageRoute ? currentPathname === navItem.href : sectionId && activeSection === sectionId

            return (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  data-active={isActive}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'rounded-none p-0 text-base font-medium text-white/70 transition',

                    // Overrides
                    'bg-transparent! hover:text-white focus:font-medium focus:text-white focus-visible:ring-0 focus-visible:outline-0 data-[active=true]:text-white'
                  )}
                  asChild
                >
                  <a href={navItem.href}>{navItem.title}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          }

          let hasActiveChild = false

          if (navItem.items) {
            if (navItem.splitItems) {
              hasActiveChild = navItem.items.some(section =>
                section.items.some(item => {
                  const isPageRoute = item.href.startsWith('/') && !item.href.includes('#')

                  const id = item.href.startsWith('/#')
                    ? item.href.slice(2)
                    : item.href.startsWith('#')
                      ? item.href.slice(1)
                      : ''

                  return isPageRoute ? currentPathname === item.href : id && activeSection === id
                })
              )
            } else {
              hasActiveChild = navItem.items.some(item => {
                const isPageRoute = item.href.startsWith('/') && !item.href.includes('#')

                const id = item.href.startsWith('/#')
                  ? item.href.slice(2)
                  : item.href.startsWith('#')
                    ? item.href.slice(1)
                    : ''

                return isPageRoute ? currentPathname === item.href : id && activeSection === id
              })
            }
          }

          return (
            <NavigationMenuItem key={navItem.title}>
              <NavigationMenuTrigger
                data-active={hasActiveChild}
                className={cn(
                  'rounded-none p-0 text-base text-white/70 [&_svg]:ml-2 [&_svg]:size-4',
                  'focus:font-medium',

                  // Override
                  'h-auto bg-transparent! transition-[color,box-shadow,font-weight] outline-none hover:text-white focus:text-white focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-white data-[state=open]:text-white'
                )}
              >
                {navItem.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={cn(
                  'left-1/2 -translate-x-1/2 bg-white/10! shadow-lg! backdrop-blur-lg! group-data-[viewport=false]/navigation-menu:mt-6! group-data-[viewport=false]/navigation-menu:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]'
                )}
              >
                {navItem.splitItems ? (
                  <div className={cn('grid grid-cols-1 gap-2', navItem.contentClassName)}>
                    {navItem.items.map(section => (
                      <div key={section.title} className='grid grid-cols-1 gap-2'>
                        <div className='px-2 text-sm text-white/70'>{section.title}</div>
                        <ul
                          className={cn('grid grid-cols-1 gap-0.5', {
                            'gap-3': section.items.find(item => item.description)
                          })}
                        >
                          {section.items.map((item, index) => (
                            <ListItem
                              key={index}
                              icon={item.icon}
                              title={item.title}
                              description={item.description}
                              href={item.href}
                              badge={item.badge}
                              splitItems={navItem.splitItems}
                              activeSection={activeSection}
                              currentPathname={currentPathname}
                            />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul
                    className={cn(
                      'grid grid-cols-1 gap-0.5',
                      { 'gap-2': navItem.items?.find(item => item.description) },
                      navItem.contentClassName
                    )}
                  >
                    {navItem.items?.map((item, index) => (
                      <ListItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        href={item.href}
                        badge={item.badge}
                        activeSection={activeSection}
                        currentPathname={currentPathname}
                      />
                    ))}
                  </ul>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const HeroNavigationSmallScreen = ({
  navigationData,
  triggerClassName,
  screenSize = 1023,
  currentPathname = '/'
}: {
  navigationData: Navigation[]
  triggerClassName?: string
  screenSize?: number
  currentPathname?: string
}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMedia(`(max-width: ${screenSize}px)`, false)

  // Extract all section IDs from navigation data
  const sectionIds = navigationData.flatMap(navItem => {
    if (navItem.href) {
      const id = navItem.href.startsWith('/#')
        ? navItem.href.slice(2)
        : navItem.href.startsWith('#')
          ? navItem.href.slice(1)
          : ''

      return id ? [id] : []
    }

    if (navItem.items) {
      if (navItem.splitItems) {
        return navItem.items.flatMap(section =>
          section.items
            .map(item => {
              const id = item.href.startsWith('/#')
                ? item.href.slice(2)
                : item.href.startsWith('#')
                  ? item.href.slice(1)
                  : ''

              return id
            })
            .filter(Boolean)
        )
      }

      return navItem.items
        .map(item => {
          const id = item.href.startsWith('/#')
            ? item.href.slice(2)
            : item.href.startsWith('#')
              ? item.href.slice(1)
              : ''

          return id
        })
        .filter(Boolean)
    }

    return []
  })

  const activeSection = useActiveSection(sectionIds, currentPathname)

  const handleLinkClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!isMobile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false)
    }
  }, [isMobile])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <GlassButton size='icon-lg' className={cn('inline-flex', triggerClassName)}>
          <MenuIcon />
          <span className='sr-only'>Menu</span>
        </GlassButton>
      </SheetTrigger>
      <SheetContent
        side='left'
        className={cn(
          'w-75 gap-0 bg-transparent p-0 [&_.lucide-x]:text-white',
          'shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
          'bg-linear-to-r from-white/25 to-white/35 backdrop-blur-md'
        )}
      >
        <SheetHeader className='p-4'>
          <SheetTitle hidden />
          <SheetDescription hidden />
          <a href='/' onClick={handleLinkClick} className='flex items-center gap-3 self-start'>
            <Neural />
            <span className='text-xl font-semibold text-white'>Neural</span>
          </a>
        </SheetHeader>
        <div className='space-y-0.5 overflow-y-auto p-2'>
          {navigationData.map((navItem, index) => {
            if (navItem.href) {
              const isPageRoute = navItem.href.startsWith('/') && !navItem.href.includes('#')

              const sectionId = navItem.href.startsWith('/#')
                ? navItem.href.slice(2)
                : navItem.href.startsWith('#')
                  ? navItem.href.slice(1)
                  : ''

              const isActive = isPageRoute ? currentPathname === navItem.href : sectionId && activeSection === sectionId

              return (
                <a
                  key={navItem.title}
                  href={navItem.href}
                  data-active={isActive}
                  className={cn(
                    'flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium text-white/70 transition hover:text-white',

                    'hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
                    'hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:backdrop-blur-md',
                    'data-[active=true]:bg-linear-to-r data-[active=true]:from-white/15 data-[active=true]:to-white/25 data-[active=true]:text-white data-[active=true]:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]'
                  )}
                  onClick={handleLinkClick}
                >
                  {navItem.title}
                </a>
              )
            }

            // Check if any child item is active
            let hasActiveChild = false

            if (navItem.items) {
              if (navItem.splitItems) {
                hasActiveChild = navItem.items.some(section =>
                  section.items.some(item => {
                    const isPageRoute = item.href.startsWith('/') && !item.href.includes('#')

                    const id = item.href.startsWith('/#')
                      ? item.href.slice(2)
                      : item.href.startsWith('#')
                        ? item.href.slice(1)
                        : ''

                    return isPageRoute ? currentPathname === item.href : id && activeSection === id
                  })
                )
              } else {
                hasActiveChild = navItem.items.some(item => {
                  const isPageRoute = item.href.startsWith('/') && !item.href.includes('#')

                  const id = item.href.startsWith('/#')
                    ? item.href.slice(2)
                    : item.href.startsWith('#')
                      ? item.href.slice(1)
                      : ''

                  return isPageRoute ? currentPathname === item.href : id && activeSection === id
                })
              }
            }

            return (
              <Collapsible key={index} className='w-full' defaultOpen={hasActiveChild}>
                <CollapsibleTrigger
                  data-active={hasActiveChild}
                  className={cn(
                    'group flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm font-medium text-white/70 transition hover:text-white',

                    'hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
                    'hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:backdrop-blur-md',
                    'data-[active=true]:bg-linear-to-r data-[active=true]:from-white/15 data-[active=true]:to-white/25 data-[active=true]:text-white data-[active=true]:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]'
                  )}
                >
                  <div className='flex items-center gap-2'>{navItem.title}</div>
                  <ChevronRightIcon className='size-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90' />
                </CollapsibleTrigger>
                <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all duration-300'>
                  {navItem.splitItems
                    ? navItem.items.map((item, i) => (
                        <div key={i} className='mt-1.5'>
                          <div className='mb-1 pl-4.5 text-xs font-medium text-white/70'>{item.title}</div>
                          {item.items.map((subItem, j) => {
                            const isPageRoute = subItem.href.startsWith('/') && !subItem.href.includes('#')

                            const sectionId = subItem.href.startsWith('/#')
                              ? subItem.href.slice(2)
                              : subItem.href.startsWith('#')
                                ? subItem.href.slice(1)
                                : ''

                            const isActive = isPageRoute
                              ? currentPathname === subItem.href
                              : sectionId && activeSection === sectionId

                            return (
                              <a
                                key={j}
                                href={subItem.href}
                                data-active={isActive}
                                className='mt-0.5 ml-4.5 flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-white/70 hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:text-white hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] hover:backdrop-blur-md data-[active=true]:bg-linear-to-r data-[active=true]:from-white/15 data-[active=true]:to-white/25 data-[active=true]:text-white data-[active=true]:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] data-[active=true]:backdrop-blur-md'
                                onClick={handleLinkClick}
                              >
                                {subItem.icon ? subItem.icon : <CircleSmallIcon className='size-4 text-white' />}
                                {subItem.title}
                              </a>
                            )
                          })}
                        </div>
                      ))
                    : navItem.items?.map(item => {
                        const isPageRoute = item.href.startsWith('/') && !item.href.includes('#')

                        const sectionId = item.href.startsWith('/#')
                          ? item.href.slice(2)
                          : item.href.startsWith('#')
                            ? item.href.slice(1)
                            : ''

                        const isActive = isPageRoute
                          ? currentPathname === item.href
                          : sectionId && activeSection === sectionId

                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            data-active={isActive}
                            className='mt-0.5 ml-3 flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-white/70 hover:bg-linear-to-r hover:from-white/15 hover:to-white/25 hover:text-white hover:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] hover:backdrop-blur-md data-[active=true]:bg-linear-to-r data-[active=true]:from-white/15 data-[active=true]:to-white/25 data-[active=true]:text-white data-[active=true]:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] data-[active=true]:backdrop-blur-md'
                            onClick={handleLinkClick}
                          >
                            {item.icon ? item.icon : <CircleSmallIcon className='size-4 text-white' />}
                            {item.title}
                          </a>
                        )
                      })}
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { HeroNavigation, HeroNavigationSmallScreen, type Navigation, type NavigationItem, type NavigationSection }
