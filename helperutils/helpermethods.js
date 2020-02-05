module.exports = {

    getModifiedDate(date) {
        if (date.charAt(0) == 0) {
            return date.charAt(1)
        } else {
            return date
        }
    }
}