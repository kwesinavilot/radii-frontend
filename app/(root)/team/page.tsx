"use client";
import Navbar from "../../../app/component/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../..//app/store/store";

const AccountSettings = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [orgDetails, setOrgDetails] = useState({
    industry: "",
    orgName: "",
    orgSize: "",
    role: "",
    country: "",
  });
  const [isUserTab, setIsUserTab] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const token = useSelector((state: any) => state.auth.token);
  const userID = useSelector((state: any) => state.auth.userID);
  const orgID = useSelector((state: RootState) => state.auth.orgID);

  console.log("OrgID: ", orgID);

  useEffect(() => {
    const userFieldsFilled = Object.values(userDetails).every(
      (field) => field !== ""
    );
    const orgFieldsFilled = Object.values(orgDetails).every(
      (field) => field !== ""
    );
    setIsButtonEnabled(isUserTab ? userFieldsFilled : orgFieldsFilled);
  }, [userDetails, orgDetails, isUserTab]);

  useEffect(() => {
    if (isUserTab) {
      fetchUserDetails();
    } else {
      fetchOrgDetails();
    }
  }, [isUserTab, userID, orgID]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://starfish-app-9ezx5.ondigitalocean.app/accounts/users/${userID}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      setUserDetails({
        name: response.data.name,
        email: response.data.email,
        password: "",
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchOrgDetails = async () => {
    try {
      const response = await axios.get(
        `https://starfish-app-9ezx5.ondigitalocean.app/accounts/orgs/${orgID}/`,
        {
          headers: { Authorization: `Token ${token}` }, // Adjust based on backend requirement
        }
      );
      setOrgDetails({
        industry: response.data.industry,
        orgName: response.data.name,
        orgSize: response.data.size,
        role: response.data.role,
        country: response.data.country,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching organization details:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleOrgInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrgDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isUserTab) {
        await axios.put(
          `https://starfish-app-9ezx5.ondigitalocean.app/accounts/users/${userID}/`,
          userDetails,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
      } else {
        await axios.put(
          `https://starfish-app-9ezx5.ondigitalocean.app/accounts/orgs/${orgID}/`,
          orgDetails,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
      }
      alert("Changes saved successfully.");
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes.");
    }
  };

  return (
    <>
      <div className="bg-grey-bg h-screen overflow-y-auto internal">
        <Navbar title={"Account Settings"} />
        <div className="block m-2 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 h-full overflow-y-auto">
          <div className="w-full max-w-[550px]">
            <h1 className="text-2xl font-semibold text-[#07074D] mb-5">
              Account Settings
            </h1>
            <div className="flex mb-5">
              <button
                className={`px-4 py-2 mr-2 rounded ${
                  isUserTab ? "bg-gray-200" : "bg-white"
                }`}
                onClick={() => setIsUserTab(true)}
              >
                User
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  !isUserTab ? "bg-gray-200" : "bg-white"
                }`}
                onClick={() => setIsUserTab(false)}
              >
                Organization
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {isUserTab ? (
                <>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={userDetails.password}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5">
                    <label
                      htmlFor="industry"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Industry
                    </label>
                    <select
                      name="industry"
                      id="industry"
                      value={orgDetails.industry}
                      onChange={handleOrgInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    >
                      <option value="" disabled>
                        Select Industry
                      </option>
                      <option value="Transportation">Transportation</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="orgName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="orgName"
                      id="orgName"
                      placeholder="Organization Name"
                      value={orgDetails.orgName}
                      onChange={handleOrgInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="orgSize"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Organization Size
                    </label>
                    <input
                      type="text"
                      name="orgSize"
                      id="orgSize"
                      placeholder="Organization Size"
                      value={orgDetails.orgSize}
                      onChange={handleOrgInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="role"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      placeholder="Role"
                      value={orgDetails.role}
                      onChange={handleOrgInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="country"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      value={orgDetails.country}
                      onChange={handleOrgInputChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>
                </>
              )}
              <div className="mb-5">
                <button
                  type="submit"
                  disabled={!isButtonEnabled}
                  className={`w-full py-3 px-6 rounded-md text-white ${
                    isButtonEnabled
                      ? "bg-[#038C7F]"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
