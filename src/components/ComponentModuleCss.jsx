import componentModuleCss from './ComponentModuleCss.module.css'

const ComponentModuleCss = () => {
    return (
        <h1 className={`${componentModuleCss.component__module} component__cssmodule font-light`}> This is a Component with CSS Module </h1>
    )
}

export default ComponentModuleCss