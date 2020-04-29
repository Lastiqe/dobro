export const required = value => {

    if (value) return undefined
    return 'Field is required'
}
export const emailCheck = value => {

    if (value) {
        let x = value.split('')
        for (let i = 0; i < x.length; i++) {
            if (x[i] === '@') {
                let y = x.filter(item => item === '@')
                if (y.length > 1) return 'неверный формат'

                return undefined

            }

        } return 'неверный формат'
    }

    return undefined
}




export const maxlengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined;
}
