// import React from "react";
// import GooglePicker from "react-google-picker";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/store/store";

// const GoogleDrivePicker: React.FC<{ onPicked: (data: any) => void }> = ({
//   onPicked,
// }) => {
//   const token = useSelector((state: RootState) => state.auth.token);

//   return (
//     <GooglePicker
//       clientId="YOUR_GOOGLE_CLIENT_ID"
//       developerKey="YOUR_GOOGLE_API_KEY"
//       scope={["https://www.googleapis.com/auth/drive.readonly"]}
//       multiselect={true}
//       navHidden={true}
//       authImmediate={false}
//       viewId={"DOCS"}
//       mimeTypes={["application/vnd.google-apps.folder"]}
//       createPicker={(google, oauthToken) => {
//         const docsView = new google.picker.DocsView(
//           google.picker.ViewId.FOLDERS
//         )
//           .setIncludeFolders(true)
//           .setSelectFolderEnabled(true);

//         const picker = new google.picker.PickerBuilder()
//           .enableFeature(google.picker.Feature.NAV_HIDDEN)
//           .setOAuthToken(oauthToken)
//           .addView(docsView)
//           .setDeveloperKey("YOUR_GOOGLE_API_KEY")
//           .setCallback((data) => {
//             if (data.action === google.picker.Action.PICKED) {
//               onPicked(data);
//             }
//           });

//         picker.build().setVisible(true);
//       }}
//     >
//       <button className="btn btn-primary">
//         Select Folder from Google Drive
//       </button>
//     </GooglePicker>
//   );
// };

// export default GoogleDrivePicker;
