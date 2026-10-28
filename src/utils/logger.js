/**
 * ANSI Color codes for formatted terminal output
 */
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

export class Logger {
  constructor(options = {}) {
    this.name = options.name || 'App';
    this.level = options.level || 'info';
    this.showTimestamps = options.showTimestamps ?? true;
  }

  _format(level, color, label, message, meta) {
    if (LOG_LEVELS[level] < (LOG_LEVELS[this.level] ?? 1)) {
      return null;
    }
    const timestamp = this.showTimestamps ? `${colors.gray}[${new Date().toISOString()}]${colors.reset} ` : '';
    const tag = `${color}[${label}]${colors.reset}`;
    const nameTag = `${colors.magenta}[${this.name}]${colors.reset}`;
    const formatted = `${timestamp}${tag} ${nameTag} ${message}`;
    if (meta && Object.keys(meta).length > 0) {
      return `${formatted} ${colors.dim}${JSON.stringify(meta)}${colors.reset}`;
    }
    return formatted;
  }

  info(message, meta) {
    const out = this._format('info', colors.cyan, 'INFO', message, meta);
    if (out) console.log(out);
  }

  success(message, meta) {
    const out = this._format('info', colors.green, 'SUCCESS', message, meta);
    if (out) console.log(out);
  }

  warn(message, meta) {
    const out = this._format('warn', colors.yellow, 'WARN', message, meta);
    if (out) console.warn(out);
  }

  error(message, errorOrMeta) {
    let meta = errorOrMeta;
    if (errorOrMeta instanceof Error) {
      meta = { message: errorOrMeta.message, stack: errorOrMeta.stack };
    }
    const out = this._format('error', colors.red, 'ERROR', message, meta);
    if (out) console.error(out);
  }

  debug(message, meta) {
    const out = this._format('debug', colors.gray, 'DEBUG', message, meta);
    if (out) console.debug(out);
  }

  banner(title, subtitle) {
    const line = colors.cyan + '='.repeat(64) + colors.reset;
    console.log(line);
    console.log(`${colors.bright}${colors.green}  ★ ${title} ★${colors.reset}`);
    if (subtitle) {
      console.log(`${colors.dim}    ${subtitle}${colors.reset}`);
    }
    console.log(line);
  }
}

export const logger = new Logger({ name: 'Workspace' });
export default logger;
