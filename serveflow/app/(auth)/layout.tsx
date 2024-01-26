const AuthLayout = ({children}: {
     children: React.ReactNode;
}) => {
    return ( <div className="h-full flex item-center justify-center">
        {children}
    </div> );
}
 
export default AuthLayout;