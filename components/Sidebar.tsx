import React from "react";
import CreateOrgForm from "./CreateOrgForm";
import OrgList from "./OrgList";
import { prismaDB } from "@/lib/connection";

const Sidebar = async () => {
  const getOrganizations = await prismaDB.organization.findMany();
  return (
    <div>
      <CreateOrgForm />
      <OrgList getOrganizations={getOrganizations} />
    </div>
  );
};

export default Sidebar;