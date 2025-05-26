import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const data = [
  { id: 1, name: "Aplicacion", platform: "iOS", price: "100.00" },
  { id: 2, name: "Aplicacion", platform: "Android", price: "100.00" },
  { id: 3, name: "Aplicacion", platform: "Web", price: "50.00" },
  { id: 4, name: "Programa", platform: "Computadora", price: "350.00" },
  { id: 5, name: "VPN", platform: "iOS", price: "250.00" },
  { id: 6, name: "App de Transferencias", platform: "iOS", price: "250.00" },
  {
    id: 7,
    name: "Creacion de cuenta",
    platform: "Cualquiera",
    price: "500.00",
  },
  {
    id: 8,
    name: "Recuperacion de cuenta",
    platform: "Cualquiera",
    price: "250.00",
  },
  {
    id: 9,
    name: "Reinstalacion de sistema",
    platform: "Computadora",
    price: "2500.00",
  },
  {
    id: 10,
    name: "Desbloqueo de red de celulares",
    platform: "Android/iOS",
    price: "2500.00+",
  },
  {
    id: 11,
    name: "Desbloqueo de celulares",
    platform: "Android/iOS",
    price: "1500.00+",
  },
];

const List = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-center mb-6"> Listado de Servicios </h1>
      <Table className="w-full">
        <TableCaption>
          Si tu servicio no se encuentra igual puedes preguntar
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Servicio</TableHead>
            <TableHead className="text-center">Plataforma</TableHead>
            <TableHead className="text-right">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((itm) => (
            <TableRow key={itm.id}>
              <TableCell className="font-medium">{itm.name}</TableCell>
              <TableCell className="text-center">{itm.platform}</TableCell>
              <TableCell className="text-right">${itm.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default List;
