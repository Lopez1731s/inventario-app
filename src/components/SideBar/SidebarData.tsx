import { Categorias, Clientes, Empleados, Inicio, Marcas, Pedidos, Productos, Proveedores, Cargos, Usuarios, Ordenes } from "./SideBarIcons";

export const SidebarData = [
    {
        submenu: [
            {
                name: 'Inicio',
                url: "dashboard",
                icon: Inicio,
            }
        ]
    },
    {
        menu: "Administración",
        submenu: [
            {
                name: "Empleados",
                url: "empleados",
                icon: Empleados,
            },
            {
                name: "Cargos",
                url: "cargos",
                icon: Cargos,
            },
            {
                name: "Usuarios",
                url: "usuarios",
                icon: Usuarios,
            },
            {
                name: "Clientes",
                url: "clientes",
                icon: Clientes,
            },
            {
                name: "Proveedores",
                url: "proveedores",
                icon: Proveedores,
            }
        ],
    },
    {
        menu: "Gestión",
        submenu: [
            {
                name: "Productos",
                url: "productos",
                icon: Productos,
            },
            {
                name: "Categorías",
                url: "categorias",
                icon: Categorias,
            },
            {
                name: "Marcas",
                url: "marcas",
                icon: Marcas,
            },
            {
                name: "Pedidos",
                url: "pedidos",
                icon: Pedidos,
            },
            {
                name: "Ordenes",
                url: "ordenes",
                icon: Ordenes,
            }
        ]
    },

];