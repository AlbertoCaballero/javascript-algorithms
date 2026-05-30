interface UserDate {
  name: string;
  email: string;
  phone: string;
}

interface UserMetaData {
  lastSignInAt: Date;
  signInLocation: {
    country: string;
    city: string;
  }
}

interface AuthenticatedUser {
  id: string;
  isAuthenticated: true;
}

interface UnauthenticatedUser {
  isAuthenticated: false;
}


// Intersection
type UserFullData = UserDate & UserMetaData;

// Union
type UserAuth = AuthenticatedUser | UnauthenticatedUser;

