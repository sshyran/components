// @flow
import getConfig from '../config';
import type {
  AvailableContent,
  Content,
  NewProgression,
  State,
  Engine,
  EngineOptions,
  Configuration
} from '../types';
import updateVariables from '../rule-engine/apply-instructions';
import createInitialAction from './create-initial-action';

export const createStateFromConfig = (
  initialState: State,
  configuration: ?Configuration
): State => {
  if (configuration && configuration.instructions)
    return updateVariables(configuration.instructions)(initialState);
  return initialState;
};

export const createProgression = (
  engine: Engine,
  content: Content,
  engineOptions: EngineOptions,
  availableContent: AvailableContent
): NewProgression => {
  const config = getConfig({ref: engine.ref, version: engine.version});
  const currentEngine = {
    ...engine,
    version: config.version
  };

  const initialAction = createInitialAction(availableContent);

  return {
    engine: currentEngine,
    engineOptions,
    content,
    actions: [initialAction]
  };
};
