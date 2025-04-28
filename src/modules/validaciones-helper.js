class ValidacionesHelper {
    getIntegerOrDefault(value, defaultValue) {
        const parsed = parseInt(value);
        return isNaN(parsed) ? defaultValue : parsed;
    }
    getStringOrDefault(value, defaultValue) {
        return value == null ? defaultValue : value;
    }
}
export default new ValidacionesHelper();
