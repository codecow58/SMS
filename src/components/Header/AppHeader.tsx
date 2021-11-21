import * as React from "react";
import {
  IPersonaSharedProps,
  IPersonaStyles,
  Persona,
  PersonaSize
} from "@fluentui/react/lib/Persona";
import { Stack } from "@fluentui/react/lib/Stack";
import { IconButton } from "@fluentui/react";
import { useNavigate } from "react-router-dom";


const personaStyles: Partial<IPersonaStyles> = { root: { margin: '-40 0 10px 0' } };


const AppHeader: React.FunctionComponent = () => {
   const examplePersona: IPersonaSharedProps = {
     imageUrl: "",
     imageInitials: "AL",
     text: "Annie Lindqvist",
     secondaryText: "Software Engineer",
     tertiaryText: "In a meeting",
     optionalText: "Available at 4:00pm",
   };
   const navigate = useNavigate()
   return (
     <Stack horizontal>
       <Persona
         {...examplePersona}
         size={PersonaSize.size32}
         styles={personaStyles}
         imageAlt="Annie Lindqvist, status is offline."
       />

       <IconButton
         iconProps={{
           iconName: "Settings",
           styles: { root: { fontSize: 18 } },
         }}
         title="Settings"
         ariaLabel={"Settings"}
         menuProps={{
           items: [
             {
               key: "logout",
               text: "Logout",
               onClick: () => {
                 navigate("/");
               },
               iconProps: { iconName: "Lock" },
             },
             {
               key: "profile",
               text: "Profile Settings",
               onClick: () => {
                 navigate("/profile-settings");
               },
               iconProps: { iconName: "PlayerSettings" },
             },
           ],
         }}
       />
     </Stack>
   );
};


export default AppHeader;
