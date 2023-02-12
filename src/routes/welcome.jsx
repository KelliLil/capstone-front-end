import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, useSubmit } from "react-router-dom";
import * as yup from "yup";
import InputText from "../components/input-text";


