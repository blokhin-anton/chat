import { actionList } from './actionList';
import { baseAction } from './interface';
// import launchDef from './i18/default.json';
import { TakeAction } from './action/take/take';

type actionsType = keyof typeof actionList;

// ?????????????
const actionsHandlers: { [P in actionsType]: Function } = {
  "TAKE": () => {}, //(new TakeAction).execute,
  "PUT": () => {},
  "PASS": () => {},
  "UP": () => {},
}

// извлечение описания по действию
export class action {
  getAction(action: actionsType): baseAction {
    return {
      code: 'string',
      description: 'string',
      sysInfo: 'any'
    };
  }
}

export class ActionProcess {
  static exec(action: actionsType, payload?: any) {
    return actionsHandlers[action](payload);
  }
}