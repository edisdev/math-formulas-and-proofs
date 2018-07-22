import { DB } from './index'

export const fetchFormulaList = () => {
  return DB.ref(`/formulas`).once('value')
}

export const fetchFormula = (id) => {
  return DB.ref(`/formulas/${id}`).once('value')
}