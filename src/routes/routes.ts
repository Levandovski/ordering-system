import { FazerPedidos } from "../pages/fazerPedidos";
import { ExibirPedidos } from "../pages/exibirPedidos";
import { routesProps } from "./interface";


export const routes: routesProps[] = [
    {
        id: 0,
        path: '/dashboard/fazer-pedidos',
        component: FazerPedidos,
    },
    {
        id: 1,
        path: '/dashboard/exibir-pedidos',
        component: ExibirPedidos,
    }
];
