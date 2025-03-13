function verificarModeloDefectuoso(modelo) {
    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    if (modelosDefectuosos.includes(modelo)) {
        return "El automóvil está defectuoso, llevar a garantía.";
      } else {
        return "Su automóvil no está defectuoso.";
      }
    }
    function obtenerModeloYVerificar() {
        let modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
        let resultado = verificarModeloDefectuoso(modelo);
        alert(resultado);
    }
    obtenerModeloYVerificar();    