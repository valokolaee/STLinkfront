import CLink from '../../ui/CLink';

export default () => {
    return (
        <CLink
            to="/"
            img={{
                src: "/images/icons/logo.svg",
                alt: "Logo",
            }}
            title="STLink"
        />
    );
}