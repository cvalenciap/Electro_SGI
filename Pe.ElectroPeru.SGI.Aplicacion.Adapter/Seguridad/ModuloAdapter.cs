using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class ModuloAdapter
    {
        public static ModuloResponse ObtenerPaginado(ModuloLogic Logic)
        {
            ModuloResponse Response = new ModuloResponse();

            Response.CodigoModulo = Logic.CodigoModulo;
            Response.CodigoSistema = Logic.CodigoSistema;
            Response.Nombre = Logic.Nombre;
            Response.Descripcion = Logic.Descripcion;
            Response.ModuloPadre = Logic.ModuloPadre;
            Response.Glyphicon = Logic.Glyphicon;
            Response.Controlador = Logic.Controlador;
            Response.Metodo = Logic.Metodo;
            Response.RutaImagen = Logic.RutaImagen;
            Response.ModuloPadreNombre = Logic.ModuloPadreNombre;
            Response.CantTotalRegistros = Logic.CantTotalRegistros;
            Response.Sistema = Logic.Sistema;

            //Obligatorios
            Response.EstadoRegistroDescripcion = Logic.EstadoRegistroDescripcion;
            Response.EstadoRegistro = Logic.EstadoRegistro;
            Response.NumeroFila = Logic.NumeroRegistro;
            Response.FilasTotal = Logic.TotalRegistro;

            return Response;
        }
    }
}
