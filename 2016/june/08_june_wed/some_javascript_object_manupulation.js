//to know the object length in javaScript
ObjectName = {
    "a" : "hello",
    "b" : "world"
}
Object.keys(ObjectName).length 

//made a function which will give use first key of a object

/**
 *  * [firstKeyOfObject will return first key of given object]
 *   * @param  {object}
 *    * @return {string}
 *     */
export function firstKeyOfObject (object) {
    for(let first in object ) {
            return first;
              
    }

}


