import mongoose from "mongoose";

interface user {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  Email: string;
  Password: string;
  confirmPassword: string;
  profilePicture: string;
  DOB: Date;
  Gender: string;
  Balance: number;
  isAdmin: Boolean;
  Auth_Roles: string;
}
enum Roles {
  Admin,
  User,
}

const schema = mongoose.Schema;

const UsersSchema = new schema<user>(
  {
    firstName: {
      type: String,
      required: [true, "Please the first name field is required"],
    },
    lastName: {
      type: String,
      required: [true, "Please the last name field is required"],
    },
    userName: {
      type: String,
      // required: [true, "Please the User name field is required"],
    },
    Email: {
      type: String,
      required: [true, "Please the Email field is required"],
    },
    Password: {
      type: String,
      min: 2,
      max: 50,
    },
    confirmPassword: {
      type: String,
      min: 2,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    DOB: {
      type: Date,
      // required: [true, "Please the DOB field is required"],
    },
    Gender: {
      type: String,
      enum: {
        values: ["Male", "Female"],
        message: "{VALUE} is not supported",
      },
      required: [true, "Please the gender field is required"],
    },
    Balance: {
      type: Number,
      default: 2000,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UsersSchema);
