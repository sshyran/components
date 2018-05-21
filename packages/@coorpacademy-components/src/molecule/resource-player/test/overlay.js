import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResourcePlayer from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call jwplayer.onPlay when overlay is clicked', t => {
  t.plan(1);

  const props = {
    resource: {
      type: 'video',
      mimeType: 'video/mp4',
      description: 'De l’éco-conception à l’innovation responsable',
      jwpOptions: {
        playerId: '12345',
        file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        playerScript: 'https://up-staging.coorpacademy.com/libs/jwplayer/7.10.7/jwplayer.js',
        licenseKey: 'yI8rSuuJ+fs7VdJzWjY4zGZU48UcOn+Gjg+FXZag16o=',
        customProps: {
          autostart: false,
          width: '100%',
          height: '100%',
          skin: {
            name: 'bekle'
          }
        }
      },
      onPlay: () => t.pass()
    },
    overlay: {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    }
  };

  const component = <ResourcePlayer {...props} />;
  const resourcePlayer = mount(component);
  const instance = resourcePlayer.instance();

  window.jwplayer = () => ({
    play: props.resource.onPlay
  });

  instance.handleOverlay();
});