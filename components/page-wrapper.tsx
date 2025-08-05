import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { div } from "motion/react-client";
import { SidebarTrigger } from "./ui/sidebar";
import { Fragment } from "react";
import LogoutButton from "./logout-button";
import { ModeToggle } from "./theme-toggle";

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export function PageWrapper({
  children,
  breadcrumbs,
}: PageWrapperProps) {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center gap-4 w-full">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={crumb.href}>
                      {crumb.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center ml-auto gap-4">
            <ModeToggle />
            <LogoutButton size="sm" />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {children}
      </div>
    </div>
  );
}
