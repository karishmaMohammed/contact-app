const initialState = [
    { id: 0, name: "Karishma Mohammed", email: "k@email.com", phone: 8378656983 },
    { id: 1, name: "Madhav Varadi", email: "m@test.com", phone: 7869876534 },
    { id: 2, name: "Ameena", email: "a@gmail.com", phone: 8567967854 },
  ];
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };