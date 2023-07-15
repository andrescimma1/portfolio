const handleButtonClick = (targetRef) => {
    console.log(targetRef)
targetRef.targetRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
});
};

export {
    handleButtonClick
}