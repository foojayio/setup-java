export const INPUT_VERSION = 'version';
export const INPUT_JAVA_VERSION = 'java-version';
export const INPUT_ARCHITECTURE = 'architecture';
export const INPUT_JAVA_PACKAGE = 'java-package';
export const INPUT_JDK_FILE = 'jdkFile';
export const INPUT_DISTRO = 'distro';
export const INPUT_SERVER_ID = 'server-id';
export const INPUT_SERVER_USERNAME = 'server-username';
export const INPUT_SERVER_PASSWORD = 'server-password';
export const INPUT_SETTINGS_PATH = 'settings-path';
export const INPUT_GPG_PRIVATE_KEY = 'gpg-private-key';
export const INPUT_GPG_PASSPHRASE = 'gpg-passphrase';

export const INPUT_DEFAULT_GPG_PRIVATE_KEY = undefined;
export const INPUT_DEFAULT_GPG_PASSPHRASE = 'GPG_PASSPHRASE';

export const STATE_GPG_PRIVATE_KEY_FINGERPRINT = 'gpg-private-key-fingerprint';

export const DISCO_URL = 'https://stage.api.foojay.io';
export const PACKAGES_PATH = '/disco/v3.0/packages';
export const IDS_PATH = '/disco/v3.0/ids';
export const DISTROS: string[] = [
  'aoj',
  'aoj_openj9',
  'corretto',
  'dragonwell',
  'jetbrains',
  'kona',
  'liberica',
  'microsoft',
  'ojdk_build',
  'openlogic',
  'oracle_openjdk',
  'oracle',
  'sap_machine',
  'semeru',
  'semeru_certified',
  'temurin',
  'trava',
  'zulu'
];
