class DateTimeHelper {
    isDate(fecha) {
        return !isNaN(Date.parse(fecha));
    }
    getEdadActual(fechaNacimiento) {
        const today = new Date();
        const birthDate = new Date(fechaNacimiento);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    getDiasHastaMiCumple(fechaNacimiento) {
        const today = new Date();
        const birthDate = new Date(fechaNacimiento);
        const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        const diff = nextBirthday - today;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    getDiaTexto(fecha, retornarAbreviacion = false) {
        const dias = retornarAbreviacion ? ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] :
                                           ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return dias[new Date(fecha).getDay()];
    }
    getMesTexto(fecha, retornarAbreviacion = false) {
        const meses = retornarAbreviacion ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"] :
                                             ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                                              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return meses[new Date(fecha).getMonth()];
    }
}
export default new DateTimeHelper();
