export const  User_Token = "  User_Token ";
export const Set_User = " Set_User";
export const Products_Item="Products_Item"
export const Location_Info="Location_Info"
export const setUser = (payload) => (
    {
    type:Set_User,
    payload,
  });
export const userToken = (payload) => (
    {
    type: User_Token,
    payload,
  });
export const productItems=(payload)=>(
  {
    type:Products_Item,
    payload
  }
)
export const locationInfo=(payload)=>(
  {
    type:Location_Info,
    payload
  }
)