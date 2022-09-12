import { categoriesIcon, clients, employeeIcon, homeIcon, marks, orders, productIcon, proveedores, roles, users } from "./SideBarIcons";

export const SidebarData = [
    {
        submenu: [
            {
                name: 'Inicio',
                url: "dashboard",
                icon: homeIcon,
            }
        ]
    },
    {
        menu: "Administración",
        submenu: [
            {
                name: "Empleados",
                url: "empleados",
                icon: employeeIcon,
            },
            {
                name: "Cargos",
                url: "cargos",
                icon: roles,
            },
            {
                name: "Usuarios",
                url: "usuarios",
                icon: users,
            },
            {
                name: "Clientes",
                url: "clientes",
                icon: clients,
            },
            {
                name: "Proveedores",
                url: "proveedores",
                icon: proveedores,
            }
        ],
    },
    {
        menu: "Gestión",
        submenu: [
            {
                name: "Productos",
                url: "productos",
                icon: productIcon,
            },
            {
                name: "Categorías",
                url: "categorias",
                icon: categoriesIcon,
            },
            {
                name: "Marcas",
                url: "marcas",
                icon: marks,
            },
            {
                name: "Pedidos",
                url: "pedidos",
                icon: orders,
            }
        ]
    },

];