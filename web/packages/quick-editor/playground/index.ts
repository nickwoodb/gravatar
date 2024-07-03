import { GravatarQuickEditor, GravatarQuickEditorCore } from '../dist';
import type { ProfileUpdatedType } from '../dist';

document.addEventListener( 'DOMContentLoaded', () => {
	new GravatarQuickEditor( {
		email: 'joao.heringer@automattic.com',
		scope: [ 'avatars', 'about' ],
		editorTriggerSelector: '#edit-avatar',
		avatarSelector: '.avatar',
	} );

	const quickEditorCore = new GravatarQuickEditorCore( {
		email: 'joao.heringer@automattic.com',
		scope: [ 'avatars', 'about' ],
		local: 'es',
		onProfileUpdated: ( type: ProfileUpdatedType ) => {
			// eslint-disable-next-line
			console.log( type );
		},
	} );

	document.querySelector( '#edit-avatar-core' )?.addEventListener( 'click', () => {
		quickEditorCore.open();
	} );
} );
