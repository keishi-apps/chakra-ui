import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../hooks/providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
