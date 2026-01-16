import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { mdxComponents } from './shadcn-mdx-components'

const themeComponents = getThemeComponents()
const CustomWrapper = (props) => {
    const DefaultWrapper = themeComponents.wrapper

    const isHomepage = props.metadata?.title === 'Home'

    if (isHomepage) {
        return props.children
    }

    return DefaultWrapper ? DefaultWrapper(props) : props.children
}

export function useMDXComponents() {
    const customComponents = {
        wrapper: CustomWrapper,
    }

    return {
        ...mdxComponents,
        ...customComponents,
    }
}
