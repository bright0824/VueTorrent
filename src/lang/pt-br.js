const locale = {
  /** General */
  category: 'categorias',
  settings: 'configurações',
  pause: 'pausar',
  delete: 'deletar',
  save: 'salvar',
  cancel: 'cancelar',
  confirm: 'confirmar',

  /** Torrent */
  torrent: {
    title: 'Titulo',
    added: 'adicionado em ',
    availability: 'disponibilidade',
    size: 'tamanho',
    progress: 'progresso',
    directory: 'diretorio',
    downloaded: 'downloaded',
    uploaded: 'uploaded',
    created: 'criado por',
    comments: 'comentarios'
  },
  /** Navbar */
  navbar: {
    currentSpeed: 'velocidade atual',
    freeSpace: 'espaço livre',
    topActions: {
      addTorrent: 'adicionar torrent',
      resumeSelected: 'resumir torrents selecionados',
      pauseSelected: 'pausar torrents selecionados',
      removeSelected: 'remover torrents selecionados',
      openSettings: 'abrir Configurações',
      searchNew: 'procurar novo torrent'
    },
    sessionStats: {
      tooltip: 'ultima vez que o qBittorrent foi reiniciado'
    }
  },

  /** Modals */
  modals: {
    add: {
      title: 'Adicionar um Novo Torrent',
      selectFiles: 'Selecionar seus Arquivos'
    },
    delete: {
      check: 'Excluir Também Arquivos Armazenados?'
    }
  },

  /** Toast */
  toast: {
    loginSuccess: 'Logou com Sucesso! 🎉',
    loginFailed: 'Falha na Autenticação 😕',
    settingsSaved: 'Configurações salvas com Sucesso!',
    categorySaved: 'Categoria Editada com Sucesso!'
  },

  /** RightClick **/
  rightClick: {
    resume: 'resumir',
    forceResume: 'forçar resumo',
    advanced: {
      advanced: 'avançado',
      changeLocation: 'mudar localização',
      rename: 'renomear'
    },
    prio: {
      prio: 'definir prioridade',
      top: 'topo',
      bottom: 'inferior',
      increase: 'aumentar',
      decrease: 'diminuir'
    },
    category: 'definir categoria',
    limit: 'definir limite',
    copy: 'copiar',
    info: 'mostrar informação'
  }
}

export default locale
