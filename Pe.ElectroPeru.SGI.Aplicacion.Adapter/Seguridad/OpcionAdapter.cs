using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class OpcionAdapter
    {
        public static OpcionResponse ObtenerPaginado(OpcionLogic Logic)
        {
            OpcionResponse Response = new OpcionResponse();

            Response.CodigoOpcion = Logic.CodigoOpcion;
            Response.CodigoModulo = Logic.CodigoModulo;
            Response.OpcionPadre = Logic.OpcionPadre;
            Response.Nombre = Logic.Nombre;
            Response.Descripcion = Logic.Descripcion;
            Response.Glyphicon = Logic.Glyphicon;
            Response.Controlador = Logic.Controlador;
            Response.Metodo = Logic.Metodo;
            Response.Area = Logic.Area;

            Response.CantTotalRegistros = Logic.CantTotalRegistros;
            Response.CodigoAccion = Logic.CodigoAccion;
            Response.Modulo = Logic.Modulo;
            Response.GlyphiconModulo = Logic.GlyphiconModulo;
            Response.CodigoPerfil = Logic.CodigoPerfil;
            Response.Perfil = Logic.Perfil;
            Response.RutaImagen = Logic.RutaImagen;
            Response.ControladorModulo = Logic.ControladorModulo;
            Response.MetodoModulo = Logic.MetodoModulo;
            Response.OpcionPadreNombre = Logic.OpcionPadreNombre;

            //Obligatorios
            Response.EstadoRegistroDescripcion = Logic.EstadoRegistroDescripcion;
            Response.EstadoRegistro = Logic.EstadoRegistro;
            Response.NumeroFila = Logic.NumeroRegistro;
            Response.FilasTotal = Logic.TotalRegistro;

            return Response;
        }
    }
}
