window.__ModuleLoader__.load({
  id: '@local/dsh-thinking-effort-slider',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const NS = 'thinking-effort-slider'
    const SLOT = 'conversation.input.right'
    const STYLE_ID = `${NS}/ThinkingEffortSlider.css`

    const zh = {
      sliderAria: '调整思考强度',
      toastAria: '思考强度：{level}',
      error: '切换思考强度失败：{message}',
      errorGeneric: '切换思考强度失败，请重试。',
    }

    const en = {
      sliderAria: 'Adjust thinking effort',
      toastAria: 'Thinking effort: {level}',
      error: 'Could not change thinking effort: {message}',
      errorGeneric: 'Could not change thinking effort. Try again.',
    }

    const css = `
.tes-anchor {
  position: relative;
  flex: none;
  width: 0;
  height: 28px;
  pointer-events: none;
}
.tes-widget {
  position: absolute;
  left: 20px;
  bottom: calc(100% + 3px);
  z-index: 2;
  box-sizing: border-box;
  width: 210px;
  width: min(210px, 30cqw);
  font-family: inherit;
  pointer-events: auto;
}
@container (width <= 560px) {
  .tes-widget {
    left: 16px;
  }
}
[data-model-compact] .tes-widget {
  display: none;
}
.tes-control {
  position: relative;
  height: 10px;
  cursor: pointer;
  outline: none;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}
.tes-control::before {
  content: "";
  position: absolute;
  inset: -4px -6px 0;
  border-radius: 8px;
}
.tes-control:focus-visible {
  border-radius: 4px;
  outline: 2px solid var(--dsw-alias-button-info-fill);
  outline-offset: 2px;
}
.tes-dragging {
  cursor: grabbing;
}
.tes-track {
  position: relative;
  height: 10px;
  margin: 0 3px;
  pointer-events: none;
}
.tes-rail {
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 1px;
}
.tes-dot {
  position: absolute;
  top: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--dsw-specific-input-major, var(--dsw-alias-bg-layer-1));
  transform: translate(-50%, -50%);
  transition: transform 120ms ease, width 120ms ease, height 120ms ease;
}
.tes-dot-active {
  width: 10px;
  height: 10px;
}
.tes-control:hover .tes-dot:not(.tes-dot-active) {
  transform: translate(-50%, -50%) scale(1.15);
}
.tes-error {
  position: absolute;
  right: 0;
  bottom: calc(100% + 2px);
  max-width: 100%;
  overflow: hidden;
  color: var(--dsw-alias-state-error-primary);
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
}
.tes-toast-layer {
  position: fixed;
  inset: 0;
  z-index: 2;
  pointer-events: none !important;
}
.tes-toast {
  position: absolute;
  left: var(--tes-toast-x, 50vw);
  top: var(--tes-toast-y, 50vh);
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 64px;
  padding: 8px 18px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-color: color-mix(in srgb, var(--tes-toast-color) 50%, var(--dsw-alias-border-l1));
  border-radius: 12px;
  background: var(--dsw-alias-bg-overlay);
  background: color-mix(in srgb, var(--tes-toast-color) 10%, var(--dsw-alias-bg-overlay));
  color: var(--dsw-alias-label-primary);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: tes-toast-fade 1000ms ease both;
}
.tes-toast-dot {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--tes-toast-color);
}
.tes-toast-label {
  text-transform: lowercase;
}
@keyframes tes-toast-fade {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(4px) scale(0.98);
  }
  18% {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0) scale(1);
  }
  78% {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-2px) scale(0.99);
  }
}
[data-composer-card]:has([data-thinking-color="green"]) {
  --tes-level-border: var(--dsw-alias-state-success-primary);
}
[data-composer-card]:has([data-thinking-color="blue"]) {
  --tes-level-border: var(--dsw-alias-button-info-fill);
}
[data-composer-card]:has([data-thinking-color="gold"]) {
  --tes-level-border: var(--dsw-alias-state-warn-primary);
}
[data-composer-card]:has([data-thinking-color="red"]) {
  --tes-level-border: var(--dsw-alias-state-error-primary);
}
[data-composer-card]:has([data-thinking-color]) {
  box-shadow: inset 0 0 0 1.5px var(--tes-level-border), var(--dsw-elevation-soft);
  transition: box-shadow 160ms ease;
}
[data-composer-card]:has([data-thinking-running]) {
  box-shadow: none;
}
[data-composer-card]:has([data-thinking-running])::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  box-shadow: 0 0 18px 4px var(--tes-level-border);
  box-shadow: 0 0 18px 4px color-mix(in srgb, var(--tes-level-border) 38%, transparent);
  opacity: 0.25;
  pointer-events: none;
  animation: tes-card-glow 1.5s ease-in-out infinite;
}
@keyframes tes-card-glow {
  0%, 100% {
    opacity: 0.22;
  }
  50% {
    opacity: 0.85;
  }
}
[data-composer-card]:has([data-thinking-color="green"]) [class*="trailing"] button[class*="primary"] {
  background-color: var(--dsw-alias-state-success-primary);
}
[data-composer-card]:has([data-thinking-color="green"]) [class*="trailing"] button[class*="primary"]:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 86%, var(--dsw-alias-label-primary));
}
[data-composer-card]:has([data-thinking-color="gold"]) [class*="trailing"] button[class*="primary"] {
  background-color: var(--dsw-alias-state-warn-primary);
}
[data-composer-card]:has([data-thinking-color="gold"]) [class*="trailing"] button[class*="primary"]:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 86%, var(--dsw-alias-label-primary));
}
[data-composer-card]:has([data-thinking-color="red"]) [class*="trailing"] button[class*="primary"] {
  background-color: var(--dsw-alias-state-error-primary);
}
[data-composer-card]:has([data-thinking-color="red"]) [class*="trailing"] button[class*="primary"]:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 86%, var(--dsw-alias-label-primary));
}
`

    const EMPTY_SNAPSHOT = {
      current: null,
      groups: [],
      status: 'idle',
      pending: null,
    }

    const EMPTY_STORE = {
      subscribe() {
        return () => {}
      },
      getSnapshot() {
        return EMPTY_SNAPSHOT
      },
    }

    function sameModel(left, right) {
      return left !== null && left !== undefined && right !== null && right !== undefined &&
        left.provider === right.provider && left.model === right.model
    }

    function levelLabel(level) {
      if (level === null || level === undefined) return ''
      return String(level.name ?? level.id ?? '')
    }

    function messageOf(error) {
      if (typeof error === 'string') return error
      if (error !== null && error !== undefined && typeof error.message === 'string') return error.message
      return ''
    }

    function makeTranslator(t) {
      if (typeof t === 'function') return t
      return (key, values) => {
        const source = en[key] ?? key
        if (values === undefined) return source
        return source.replace(/\{(\w+)\}/g, (match, name) => values[name] === undefined ? match : String(values[name]))
      }
    }

    const EFFORT_COLOR_BY_ID = {
      off: 'green',
      low: 'blue',
      high: 'gold',
      max: 'red',
    }
    const EFFORT_COLOR_ORDER = ['green', 'blue', 'gold', 'red']
    const EFFORT_COLOR_TOKENS = {
      green: 'var(--dsw-alias-state-success-primary)',
      blue: 'var(--dsw-alias-button-info-fill)',
      gold: 'var(--dsw-alias-state-warn-primary)',
      red: 'var(--dsw-alias-state-error-primary)',
    }

    function effortColorName(level, index, count) {
      const id = level === null || level === undefined ? '' : String(level.id ?? '').toLowerCase()
      if (EFFORT_COLOR_BY_ID[id] !== undefined) return EFFORT_COLOR_BY_ID[id]
      if (count <= 1) return 'green'
      const slot = Math.round((index / (count - 1)) * (EFFORT_COLOR_ORDER.length - 1))
      return EFFORT_COLOR_ORDER[Math.max(0, Math.min(EFFORT_COLOR_ORDER.length - 1, slot))]
    }

    function effortColorToken(name) {
      return EFFORT_COLOR_TOKENS[name] ?? EFFORT_COLOR_TOKENS.blue
    }

    function conversationCenter(node) {
      const viewportWidth = typeof window === 'undefined' ? 0 : window.innerWidth
      const viewportHeight = typeof window === 'undefined' ? 0 : window.innerHeight
      const content = node !== null && node !== undefined && typeof node.closest === 'function'
        ? node.closest('[data-conversation-content]')
        : null
      if (content !== null) {
        const rect = content.getBoundingClientRect()
        if (rect.width > 0 && rect.height > 0) {
          return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          }
        }
      }
      const card = node !== null && node !== undefined && typeof node.closest === 'function'
        ? node.closest('[data-composer-card]')
        : null
      if (card !== null) {
        const rect = card.getBoundingClientRect()
        if (rect.width > 0) {
          return {
            x: rect.left + rect.width / 2,
            y: viewportHeight / 2,
          }
        }
      }
      return {
        x: viewportWidth / 2,
        y: viewportHeight / 2,
      }
    }

    function createLevelToastStore() {
      let snapshot = null
      let seq = 0
      const listeners = new Set()
      const emit = () => {
        for (const listener of [...listeners]) listener()
      }
      return {
        subscribe(listener) {
          listeners.add(listener)
          return () => {
            listeners.delete(listener)
          }
        },
        getSnapshot() {
          return snapshot
        },
        show(name, color, center) {
          snapshot = {
            seq: ++seq,
            name,
            color,
            x: center?.x,
            y: center?.y,
          }
          emit()
        },
        clear(id) {
          if (snapshot === null || snapshot.seq !== id) return
          snapshot = null
          emit()
        },
      }
    }

    const levelToast = createLevelToastStore()

    function ThinkingEffortToast({ t }) {
      const toast = React.useSyncExternalStore(levelToast.subscribe, levelToast.getSnapshot)
      const tr = makeTranslator(t)

      React.useEffect(() => {
        if (toast === null) return
        const timer = setTimeout(() => levelToast.clear(toast.seq), 1100)
        return () => clearTimeout(timer)
      }, [toast])

      if (toast === null) return null
      const x = Number.isFinite(toast.x) ? toast.x : (typeof window === 'undefined' ? 0 : window.innerWidth / 2)
      const y = Number.isFinite(toast.y) ? toast.y : (typeof window === 'undefined' ? 0 : window.innerHeight / 2)
      return h('div', {
        className: 'tes-toast-layer',
        'data-thinking-toast-layer': '',
      },
      h('div', {
        key: toast.seq,
        className: 'tes-toast',
        role: 'status',
        'aria-label': tr('toastAria', { level: toast.name }),
        style: {
          '--tes-toast-color': toast.color,
          '--tes-toast-x': `${x}px`,
          '--tes-toast-y': `${y}px`,
        },
      },
      h('span', { className: 'tes-toast-dot', 'aria-hidden': true }),
      h('span', { className: 'tes-toast-label' }, toast.name),
      ))
    }

    function ThinkingEffortSlider(props) {
      const { available, directory, load, select, t, useSession } = props
      const store = directory ?? EMPTY_STORE
      const subscribe = React.useCallback((notify) => store.subscribe(notify), [store])
      const getSnapshot = React.useCallback(() => store.getSnapshot(), [store])
      const snapshot = React.useSyncExternalStore(subscribe, getSnapshot)
      const running = useSession((session) => session?.running === true)

      const trackRef = React.useRef(null)
      const draggingRef = React.useRef(false)
      const pointerIdRef = React.useRef(null)
      const pressRef = React.useRef(null)
      const aliveRef = React.useRef(true)
      const loadRef = React.useRef(load)
      loadRef.current = load
      const [dragIndex, setDragIndex] = React.useState(null)
      const [error, setError] = React.useState(null)

      React.useEffect(() => {
        aliveRef.current = true
        return () => {
          aliveRef.current = false
        }
      }, [])

      React.useEffect(() => {
        if (available !== true) return
        const loader = loadRef.current
        if (typeof loader !== 'function') return
        loader()
      }, [available, store])

      const groups = Array.isArray(snapshot?.groups) ? snapshot.groups : []
      const current = snapshot?.current ?? null
      let group
      let model
      for (const candidate of groups) {
        if (current !== null && candidate.id === current.provider) {
          group = candidate
          break
        }
      }
      if (group !== undefined && Array.isArray(group.models)) {
        for (const candidate of group.models) {
          if (candidate.id === current?.model) {
            model = candidate
            break
          }
        }
      }

      const reasoning = model?.reasoning
      const rawEfforts = Array.isArray(reasoning?.efforts) ? reasoning.efforts : []
      const efforts = rawEfforts.filter((level) => level !== null && level !== undefined && level.id !== null && level.id !== undefined)
      const effortKey = efforts.map((level) => String(level.id)).join('\u0000')
      const selectedId = current?.reasoningEffort ?? reasoning?.defaultEffort
      const pending = snapshot?.pending
      const pendingEffort = sameModel(pending, current) ? pending?.reasoningEffort : undefined
      const appliedId = pendingEffort ?? selectedId
      let appliedIndex = efforts.findIndex((level) => level.id === appliedId)
      if (appliedIndex < 0) appliedIndex = 0
      const usable = available === true && current !== null && efforts.length > 1
      const displayIndex = dragIndex === null || !usable
        ? appliedIndex
        : Math.max(0, Math.min(dragIndex, efforts.length - 1))
      const activeLevel = efforts[displayIndex]
      const busy = snapshot?.status === 'selecting'

      React.useEffect(() => {
        setDragIndex(null)
        setError(null)
      }, [current?.provider, current?.model, effortKey])

      React.useEffect(() => {
        if (error === null) return
        const timer = setTimeout(() => setError(null), 6000)
        return () => clearTimeout(timer)
      }, [error])

      const tr = makeTranslator(t)

      const commit = React.useCallback((index) => {
        if (available !== true || current === null) return
        const level = efforts[index]
        if (level === undefined) return
        if (level.id === (appliedId ?? null)) {
          setDragIndex(null)
          return
        }
        setError(null)
        let result
        try {
          result = select({
            provider: current.provider,
            model: current.model,
            reasoningEffort: level.id,
          })
        } catch (failure) {
          if (aliveRef.current) {
            const message = messageOf(failure)
            setError(message === '' ? tr('errorGeneric') : tr('error', { message }))
          }
          return
        }
        Promise.resolve(result).then((outcome) => {
          if (!aliveRef.current) return
          if (outcome !== null && outcome !== undefined && outcome.ok === false) {
            const message = messageOf(outcome.error)
            setError(message === '' ? tr('errorGeneric') : tr('error', { message }))
          }
        }).catch((failure) => {
          if (!aliveRef.current) return
          const message = messageOf(failure)
          setError(message === '' ? tr('errorGeneric') : tr('error', { message }))
        })
      }, [available, current?.provider, current?.model, effortKey, appliedId, select, tr])

      const indexAt = React.useCallback((clientX) => {
        const node = trackRef.current
        if (node === null || efforts.length <= 1) return 0
        const rect = node.getBoundingClientRect()
        const innerWidth = rect.width - 6
        if (innerWidth <= 0) return 0
        const ratio = (clientX - rect.left - 3) / innerWidth
        return Math.max(0, Math.min(efforts.length - 1, Math.round(ratio * (efforts.length - 1))))
      }, [effortKey])

      if (!usable) return null

      const colorNames = efforts.map((level, index) => effortColorName(level, index, efforts.length))
      const colorTokens = colorNames.map(effortColorToken)
      const activeColorName = colorNames[displayIndex] ?? 'blue'
      const railGradient = `linear-gradient(90deg, ${colorTokens.map((color, index) => `${color} ${(index / (efforts.length - 1)) * 100}%`).join(', ')})`
      const stopEvent = (event) => {
        event.stopPropagation()
      }

      const onPointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return
        if (pointerIdRef.current !== null) return
        event.stopPropagation()
        pointerIdRef.current = event.pointerId
        draggingRef.current = true
        event.preventDefault()
        const node = event.currentTarget
        try {
          node.setPointerCapture(event.pointerId)
        } catch {}
        node.focus({ preventScroll: true })
        setError(null)
        const index = indexAt(event.clientX)
        pressRef.current = {
          x: event.clientX,
          y: event.clientY,
          index,
          moved: false,
        }
        setDragIndex(index)
      }

      const onPointerMove = (event) => {
        if (!draggingRef.current || pointerIdRef.current !== event.pointerId) return
        const index = indexAt(event.clientX)
        const press = pressRef.current
        if (press !== null && !press.moved) {
          if (index !== press.index || Math.abs(event.clientX - press.x) > 4 || Math.abs(event.clientY - press.y) > 4) {
            press.moved = true
          }
        }
        setDragIndex(index)
      }

      const finishPointer = (event, shouldCommit) => {
        if (!draggingRef.current || pointerIdRef.current !== event.pointerId) return
        const press = pressRef.current
        const index = shouldCommit ? indexAt(event.clientX) : null
        const wasClick = shouldCommit && press !== null && !press.moved &&
          Math.abs(event.clientX - press.x) <= 4 && Math.abs(event.clientY - press.y) <= 4
        draggingRef.current = false
        pointerIdRef.current = null
        pressRef.current = null
        try {
          event.currentTarget.releasePointerCapture(event.pointerId)
        } catch {}
        setDragIndex(null)
        if (index !== null) {
          commit(index)
          const level = efforts[index]
          if (wasClick && level !== undefined) {
            const colorName = colorNames[index] ?? 'blue'
            levelToast.show(levelLabel(level), effortColorToken(colorName), conversationCenter(trackRef.current))
          }
        }
      }

      const onPointerUp = (event) => {
        finishPointer(event, true)
      }

      const onPointerCancel = (event) => {
        finishPointer(event, false)
      }

      const onLostPointerCapture = (event) => {
        if (pointerIdRef.current !== event.pointerId) return
        draggingRef.current = false
        pointerIdRef.current = null
        pressRef.current = null
        setDragIndex(null)
      }

      const onKeyDown = (event) => {
        let next
        if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
          next = Math.min(efforts.length - 1, displayIndex + 1)
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
          next = Math.max(0, displayIndex - 1)
        } else if (event.key === 'Home') {
          next = 0
        } else if (event.key === 'End') {
          next = efforts.length - 1
        } else {
          return
        }
        event.preventDefault()
        setDragIndex(null)
        commit(next)
      }

      return h('div', {
        className: 'tes-anchor',
        'data-thinking-color': activeColorName,
        'data-thinking-running': running ? 'true' : undefined,
      },
      h('div', {
        className: 'tes-widget',
        'data-thinking-effort-slider': '',
      },
      h('div', {
        ref: trackRef,
        className: dragIndex === null ? 'tes-control' : 'tes-control tes-dragging',
        role: 'slider',
        tabIndex: 0,
        'aria-label': tr('sliderAria'),
        'aria-orientation': 'horizontal',
        'aria-valuemin': 0,
        'aria-valuemax': Math.max(0, efforts.length - 1),
        'aria-valuenow': displayIndex,
        'aria-valuetext': levelLabel(activeLevel),
        'aria-busy': busy ? true : undefined,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel,
        onLostPointerCapture,
        onKeyDown,
        onMouseDown: stopEvent,
        onClick: stopEvent,
      },
      h('div', { className: 'tes-track', 'aria-hidden': true },
        h('div', { className: 'tes-rail', style: { background: railGradient } }),
        efforts.map((level, index) => h('span', {
          key: String(level.id),
          className: index === displayIndex ? 'tes-dot tes-dot-active' : 'tes-dot',
          style: {
            left: `${(index / (efforts.length - 1)) * 100}%`,
            background: colorTokens[index],
          },
        })),
      ),
      ),
      error === null ? null : h('div', { className: 'tes-error', role: 'alert' }, error),
      ),
      )
    }

    const inject = ['locale', 'slots']

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'thinking-effort-slider: dictionaries')

      ctx.effect(() => {
        const previous = document.querySelector(`style[data-plugin-css="${STYLE_ID}"]`)
        if (previous !== null) previous.remove()
        const tag = document.createElement('style')
        tag.dataset.plugin = '@local/dsh-thinking-effort-slider'
        tag.dataset.pluginCss = STYLE_ID
        tag.textContent = css
        document.head.appendChild(tag)
        return () => {
          tag.remove()
        }
      }, 'thinking-effort-slider: styles')

      ctx.slots.inject('shell.overlay', () => ctx.slots.register({
        name: 'shell.overlay',
        id: 'thinking-effort-toast',
        order: 2000,
        locale: NS,
      }, ThinkingEffortToast))

      ctx.inject(['slots', 'modelDirectories', 'sessions'], (scope) => {
        const models = scope.modelDirectories
        const sessions = scope.sessions
        scope.slots.inject(SLOT, () => scope.slots.register({
          name: SLOT,
          id: 'thinking-effort-slider',
          order: 100,
          locale: NS,
          inject: (sessionId) => {
            const available = sessions.subagentAddress(sessionId) === undefined
            if (!available) return { available: false }
            const directory = models.directoryFor(sessionId)
            return {
              available: true,
              directory: directory.store,
              load: () => {
                try {
                  const result = directory.load()
                  if (result !== null && result !== undefined && typeof result.catch === 'function') {
                    result.catch(() => {})
                  }
                } catch {}
              },
              select: (selection) => directory.select(selection),
            }
          },
        }, ThinkingEffortSlider))
      })
    }

    return { inject, apply }
  },
})
