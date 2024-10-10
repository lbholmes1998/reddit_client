import React from 'react';
import { Counter } from '../features/counter/Counter';
import Posts from '../features/posts/Posts';
import Subreddits from '../features/subreddits/Subreddits';
import './App.css';

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

function App() {
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
            <SidebarDivider/>

            <SidebarSection className="max-lg:hidden">
              <SidebarItem href="/search">
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
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
  );
}

export default App;
