export default {
  state: {
    access: ""
  },
  mutations: {
    setAccess(state, access) {
      state.access = access;
    }
  },
  getters: {
    messageUnreadCount: state => state.messageUnreadList.length,
    messageReadedCount: state => state.messageReadedList.length,
    messageTrashCount: state => state.messageTrashList.length
  }
};
