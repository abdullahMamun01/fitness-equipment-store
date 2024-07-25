import { LayoutList, List, SquareDashedKanban, User } from "lucide-react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Sidebar className="bg-primary border-0">
      <div className="text-gray-300 text-2xl font-bold bg-primary px-5 py-[24px]  ">
        <div className="sidebar-header">
          <div className="flex  gap-2">
            <div>
              <SquareDashedKanban className="text-secondary" />
            </div>
            <h5>Admin</h5>
          </div>
        </div>
      </div>
      <Menu
        className="bg-primary text-gray-400 min-h-screen pt-8"
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}>
        <div className="flex ga-2 px-5 font-bold py-2">MENU</div>

      
          <SubMenu label="Inventory" className="text-gray-300" icon={<LayoutList className="mr-2 hover:bg-primary" />}>
            <MenuItem
              className="bg:primary"
              component={<Link to="/admin/dashboard/inventory" />}>
              <div className="flex gap-2">
                <LayoutList className="mr-2" /> Product
              </div>
            </MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        

        <MenuItem className="bg:primary" component={<Link to="/calendar" />}>
          <div className="flex ga-2">
            <LayoutList className="mr-2" /> Order List
          </div>
        </MenuItem>
        <MenuItem className="bg:primary" component={<Link to="/calendar" />}>
          <div className="flex ga-2">
            <User className="mr-2" /> User List
          </div>
        </MenuItem>
        <MenuItem className="bg:primary" component={<Link to="/calendar" />}>
          <div className="flex ga-2">
            <LayoutList className="mr-2" /> Task
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
