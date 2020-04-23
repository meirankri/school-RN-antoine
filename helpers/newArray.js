const newArray = array => {
    return array.map( object => {
        return { ...object } // une copie de object
    });
}
export default newArray;