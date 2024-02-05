import DoubleSidedImage from '@/components/shared/DoubleSidedImage'

const Example = () => {
    return (
        <DoubleSidedImage
        style={{width:"100px"}}
        src="/img/logo/logo-light-full.png"
        darkModeSrc="/img/logo/logo-dark-full.png"
            alt="elstar"
        />
    )
}

export default Example
