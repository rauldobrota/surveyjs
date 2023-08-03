import { surveyLocalization } from "survey-core";

export var portugueseSurveyStrings = {
  pagePrevText: "Anterior",
  pageNextText: "Próximo",
  completeText: "Finalizar",
  previewText: "Pré-visualização",
  editText: "Editar",
  startSurveyText: "Começar",
  otherItemText: "Outros (descrever)",
  noneItemText: "Nenhum",
  selectAllItemText: "Selecionar Todos",
  progressText: "Página {0} de {1}",
  indexText: "{0} de {1}",
  panelDynamicProgressText: "Registo {0} de {1}",
  panelDynamicTabTextFormat: "Painel {panelIndex}",
  questionsProgressText: "Respostas {0}/{1} perguntas",
  emptySurvey: "Não há página visível ou pergunta no questionário.",
  completingSurvey: "Obrigado por finalizar o questionário!",
  completingSurveyBefore: "Os nossos registos mostram que já finalizou o questionário.",
  loadingSurvey: "O questionário está a carregar...",
  placeholder: "Selecione...",
  ratingOptionsCaption: "Selecione aqui para avaliar...",
  value: "valor",
  requiredError: "Por favor, responda à pergunta.",
  requiredErrorInPanel: "Por favor, responda pelo menos a uma pergunta.",
  requiredInAllRowsError: "Por favor, responda às perguntas em todas as linhas.",
  numericError: "O valor deve ser numérico.",
  minError: "O valor não deverá ser menor que {0}",
  maxError: "O valor não deverá ser maior que {0}",
  textMinLength: "Por favor, insira pelo menos {0} caracteres.",
  textMaxLength: "Por favor, insira menos de {0} caracteres.",
  textMinMaxLength: "Por favor, insira mais de {0} e menos de {1} caracteres.",
  minRowCountError: "Preencha pelo menos {0} linhas.",
  minSelectError: "Selecione pelo menos {0} opções.",
  maxSelectError: "Por favor, selecione no máximo {0} opções.",
  numericMinMax: "O '{0}' deve ser igual ou superior a {1} e igual ou menor que {2}",
  numericMin: "O '{0}' deve ser igual ou superior a {1}",
  numericMax: "O '{0}' deve ser igual ou inferior a {1}",
  invalidEmail: "Por favor, insira um e-mail válido.",
  invalidExpression: "A expressão: {0} deve retornar 'verdadeiro'.",
  urlRequestError: "O pedido retornou o erro '{0}'. {1}",
  urlGetChoicesError: "O pedido não retornou dados ou o 'caminho' do pedido não está correto",
  exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
  otherRequiredError: "Por favor, insira o outro valor.",
  uploadingFile: "O seu ficheiro está a carregar. Por favor, aguarde alguns segundos e tente novamente.",
  loadingFile: "A carregar...",
  chooseFile: "Selecione o(s) arquivo(s)...",
  noFileChosen: "Nenhum ficheiro escolhido",
  fileDragAreaPlaceholder: "Arraste um ficheiro aqui ou clique no botão abaixo para carregar o ficheiro.",
  confirmDelete: "Tem a certeza que deseja apagar?",
  keyDuplicationError: "Este valor deve ser único.",
  addColumn: "Adicionar coluna",
  addRow: "Adicionar linha",
  removeRow: "Remover linha",
  emptyRowsText: "Não existem linhas.",
  addPanel: "Adicionar novo",
  removePanel: "Remover",
  choices_Item: "item",
  matrix_column: "Coluna",
  matrix_row: "Linha",
  multipletext_itemname: "texto",
  savingData: "Os resultados estão a ser guardados no servidor...",
  savingDataError: "Ocorreu um erro e não foi possível guardar os resultados.",
  savingDataSuccess: "Os resultados foram guardados com sucesso!",
  saveAgainButton: "Tente novamente",
  timerMin: "min",
  timerSec: "seg",
  timerSpentAll: "Você gastou {0} nesta página e {1} no total.",
  timerSpentPage: "Você gastou {0} nesta página.",
  timerSpentSurvey: "Você gastou {0} no total.",
  timerLimitAll: "Você gastou {0} de {1} nesta página e {2} de {3} no total.",
  timerLimitPage: "Você gastou {0} de {1} nesta página.",
  timerLimitSurvey: "Você gastou {0} de {1} no total.",
  clearCaption: "Limpar",
  signaturePlaceHolder: "Assine aqui",
  chooseFileCaption: "Escolher ficheiro",
  removeFileCaption: "Remover este ficheiro",
  booleanCheckedLabel: "Sim",
  booleanUncheckedLabel: "Não",
  confirmRemoveFile: "Tem a certeza que deseja remover este ficheiro: {0}?",
  confirmRemoveAllFiles: "Tem a certeza que deseja remover todos os ficheiros?",
  questionTitlePatternText: "Título da questão",
  modalCancelButtonText: "Cancelar",
  modalApplyButtonText: "Aplicar",
  filterStringPlaceholder: "Digite para pesquisar...",
  emptyMessage: "Não existe informação a mostrar",
  noEntriesText: "Ainda não existem registos.\nClique no botão abaixo para adicionar um novo registo.",
  noEntriesReadonlyText: "Não há entradas.",
  more: "Mais",
  tagboxDoneButtonCaption: "Terminado",
  selectToRankEmptyRankedAreaText: "Todas as opções são classificadas",
  selectToRankEmptyUnrankedAreaText: "Arraste e solte as opções aqui para classificá-las"
};

surveyLocalization.locales["pt"] = portugueseSurveyStrings;
surveyLocalization.localeNames["pt"] = "português";

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// panelDynamicTabTextFormat: "Panel {panelIndex}" => "Painel {panelIndex}"
// noEntriesReadonlyText: "There are no entries." => "Não há entradas."
// selectToRankEmptyRankedAreaText: "All choices are ranked" => "Todas as opções são classificadas"
// selectToRankEmptyUnrankedAreaText: "Drag and drop choices here to rank them" => "Arraste e solte as opções aqui para classificá-las"