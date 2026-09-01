export const checkValidate = (name,email, password, isSignIn) => {
    const isEmailValid =/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isSignIn){
        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
        if (!isNameValid) return "*Name is not valid";
    }
        
    if (!isEmailValid) return "*Email is not valid";
    if (!isPasswordValid) return "*Password is not valid";
    

    return null;
};
