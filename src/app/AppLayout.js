import {
    Sidebar,
    SidebarBody,
    SidebarDivider,
    SidebarFooter,
    SidebarHeader,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from '../app/components/sidebar'
import { SidebarLayout } from '../app/components/sidebar-layout'
import { Heading } from './components/heading';
import {
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import Posts from '../features/posts/Posts';
import Subreddits from '../features/subreddits/Subreddits';
import SearchBar from './components/searchBar';

export default function AppLayout() {
    return (
        <SidebarLayout
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <SidebarSection className="max-lg:hidden">
                            <SidebarItem href="/search">
                                <Heading>Little Reddit </Heading>
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarDivider />

                        <SidebarSection className="max-lg:hidden">
                            <SearchBar />
                        </SidebarSection>
                    </SidebarHeader>
                    <SidebarBody>
                        <SidebarSection>
                            <Subreddits />
                        </SidebarSection>
                        <SidebarSpacer />
                    </SidebarBody>
                </Sidebar>
            }
        >
            {/* The page content */}
            <Posts />
        </SidebarLayout>
    )
}