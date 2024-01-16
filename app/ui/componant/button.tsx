'use client'

function button({classes,value, clickFunc, params}:{classes:string,value:string, clickFunc:Function, params:string|number} ) {
  return (
    <>
        <button aria-label={value} className={`${classes}`} onClick={()=>clickFunc(params)}>
            {value}
        </button>
    </>
  )
}

export default button