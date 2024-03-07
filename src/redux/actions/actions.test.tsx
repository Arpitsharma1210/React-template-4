

import { MetaData } from "../../models";
import {
    APICALL,
    PAGINATED_APICALL,
    TOKEN_UPDATE,
    TOKEN_REMOVE,
    LOGIN,
    LOGOUT,
    FETCH_BASE_DATA,
    FETCH_PROFILE,
    UPDATE_PROFILE,
    SHOW_LOADER,
    HIDE_LOADER,
    emptyAction,
    action,
    apiRequest,
    paginatedApiRequest,
    updateToken,
    removeToken,
    login,
    logout,
    fetchBaseData,
    fetchUserProfile,
    showLoader,
    hideLoader,
    PagedApiCall,
    updateProfile,
  } from "../../redux/actions";
  
  describe("Redux Actions", () => {
    it("should create an empty action", () => {
      const expectedAction = { type: "YOUR_TYPE" };
      const resultAction = emptyAction("YOUR_TYPE");
      expect(resultAction).toEqual(expectedAction);
    });
  
    it("should create an action with payload", () => {
      const expectedAction = { type: "YOUR_TYPE", payload: "YOUR_PAYLOAD" };
      const resultAction = action("YOUR_TYPE", "YOUR_PAYLOAD");
      expect(resultAction).toEqual(expectedAction);
    });
  
    it("should create an API request action", () => {
      const expectedAction = {
        type: APICALL,
        payload: {
          request: {
            key: "YOUR_REQUEST_KEY",
            requestProps: {
              endpoint: "YOUR_ENDPOINT",
              method: "YOUR_METHOD",
              payload: "YOUR_PAYLOAD",
              isFormData: undefined,
            },
          },
          success: {},
          failure: {},
        },
      };
      const resultAction = apiRequest(
        {
          request: {
            key: "YOUR_REQUEST_KEY",
            requestProps: {
              endpoint: "YOUR_ENDPOINT",
              method: "YOUR_METHOD",
            },
          },
          success: {},
          failure: {},
        },
        "YOUR_PAYLOAD"
      );
      expect(resultAction).toEqual(expectedAction);
    });
  
    it("should create a paginated API request action", () => {
      const expectedAction = {
        type: PAGINATED_APICALL,
        payload: {
          request: {
            key: "YOUR_KEY",
            endpoint: "YOUR_ENDPOINT",
            filter: {
              /* Your filter object */
            },
            loadMore: false,
          },
          update: { action: "YOUR_UPDATE_ACTION" },
          loadMore: { action: "YOUR_LOAD_MORE_ACTION" },
          reset: { action: "YOUR_RESET_ACTION" },
        },
      };
      const resultAction = paginatedApiRequest({
        request: {
          key: "YOUR_KEY",
          endpoint: "YOUR_ENDPOINT",
          filter: {
              
          },
          loadMore: false,
        },
        update: { action: "YOUR_UPDATE_ACTION" },
        loadMore: { action: "YOUR_LOAD_MORE_ACTION" },
        reset: { action: "YOUR_RESET_ACTION" },
      });
      expect(resultAction).toEqual(expectedAction);
    });
  
    it("should create an update token action", () => {
      const expectedAction = {
        type: TOKEN_UPDATE,
        payload: "YOUR_TOKEN",
      };
      const resultAction = updateToken("YOUR_TOKEN");
      expect(resultAction).toEqual(expectedAction);
    });
  
  });
  
  interface YourDataType {
    // Define the properties of your data type here
    id: number;
    name: string;
  }

  describe("paginatedApiRequest", () => {
    it("should create a paginated API request action", () => {
      // Define a sample MetaData object
      const metaData: MetaData<YourDataType> = {
        order: "",
        direction: "asc",
        total: 10,
        page: 1,
        limit: 10,
        filters: {},
        allowedFilters: ["propertyName"],
      };
  
      // Define a sample PagedApiCall object
      const paginatedApi: PagedApiCall<YourDataType> = {
        request: {
          key: "your_key",
          endpoint: "your_endpoint",
          filter: metaData, // Use the sample MetaData object
          loadMore: true,
        },
        update: { action: "your_update_action" },
        loadMore: { action: "your_load_more_action" },
        reset: { action: "your_reset_action" },
      };
  
      // Call the paginatedApiRequest function with the sample PagedApiCall object
      const action = paginatedApiRequest(paginatedApi);
  
      // Assert that the action type and payload are as expected
      expect(action).toEqual({
        type: "PAGINATED_APICALL",
        payload: {
          request: {
            key: "your_key",
            endpoint: "your_endpoint",
            filter: metaData, // Use the sample MetaData object
            loadMore: true,
          },
          update: { action: "your_update_action" },
          loadMore: { action: "your_load_more_action" },
          reset: { action: "your_reset_action" },
        },
      });
    });
  });

  test('showLoader should create an action with type SHOW_LOADER', () => {
    const action = showLoader();
    expect(action.type).toBe(SHOW_LOADER);
  });
  
  test('hideLoader should create an action with type HIDE_LOADER', () => {
    const action = hideLoader();
    expect(action.type).toBe(HIDE_LOADER);
  });



  test('showLoader should have an empty payload', () => {
    const action = showLoader();
    expect(action.payload).toBeUndefined();
  });
  
  test('hideLoader should have an empty payload', () => {
    const action = hideLoader();
    expect(action.payload).toBeUndefined();
  });

  test('fetchBaseData should create an action with type FETCH_BASE_DATA', () => {
    const action = fetchBaseData();
    expect(action.type).toBe(FETCH_BASE_DATA);
  });
  
  test('fetchBaseData should have an empty payload', () => {
    const action = fetchBaseData();
    expect(action.payload).toBeUndefined(); 
  });

  test('fetchUserProfile should create an action with type FETCH_PROFILE', () => {
    const action = fetchUserProfile();
    expect(action.type).toBe(FETCH_PROFILE);
  });
  
  test('fetchUserProfile should have an empty payload', () => {
    const action = fetchUserProfile();
    expect(action.payload).toBeUndefined(); 
  });

  test('updateProfile should create an action with type UPDATE_PROFILE', () => {
    const profileData = { name: 'John Doe', email: 'johndoe@email.com' };
    const action = updateProfile(profileData);
    expect(action.type).toBe(UPDATE_PROFILE);
  });
  
  test('updateProfile should include the profile data in the payload', () => {
    const profileData = { name: 'Alice Smith', email: 'alicesmith@email.com' };
    const action = updateProfile(profileData);
    expect(action.payload).toBe(profileData);
  });

  test('logout should create an action with type LOGOUT', () => {
    const action = logout();
    expect(action.type).toBe(LOGOUT);
  });
  
  test('logout should have an empty payload', () => {
    const action = logout();
    expect(action.payload).toBeUndefined(); 
  });

  test('removeToken should create an action with type TOKEN_REMOVE', () => {
    const action = removeToken();
    expect(action.type).toBe(TOKEN_REMOVE);
  });
  
  test('removeToken should have an empty payload', () => {
    const action = removeToken();
    expect(action.payload).toBeUndefined();
  });

