import jwtService from "../services/jwt-service"

export const guard = (to, from, next) => {
    const user = jwtService.getToken();
    console.log(to.name)

    try {
        switch (to.name) {
            //proteger la route administratreur
            case "Admin":
                if (jwtService.isValid() && user?.type == "admin")
                    next()
                else if (jwtService.isValid() && user?.type == "customer")
                    next({ name: "Profile" })
                else
                    next({ name: 'Login' })
                break;
            case "Home":
                next()
                break
            default:
                next()
                break;
        }
    } catch (error) {
        console.log(error)
    }


}