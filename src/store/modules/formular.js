import {
  fetchFormulaList,
  fetchFormula
} from '../../firebase/formulas';

const state = {
  data: [],
  loading: false,
  loaded: false,
};

// getters
const getters = {
  Formulas: state => ({
    data: state.data,
    loaded: state.loaded,
    loading: state.loading,
  })
};

// mutations
const mutations = {
  setFormulas(state, persons) {
    state.loading = true;
    state.data = persons;
    state.loaded = false;
  },
  setLoading(state) {
    state.loaded = true;
    state.loading = false;
  }
};

// actions
const actions = {
  getFormulaList({ commit }) {
    return fetchFormulaList().then((snapshot ) => {
      commit('setFormulas', snapshot.val())
      commit('setLoading')
    });
  },
  getFormula({ commit }, id) {
    return fetchFormula(id).then((snapshot) => {
      commit('setFormulas', snapshot.val())
      console.log(snapshot.val())
      commit('setLoading')
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};