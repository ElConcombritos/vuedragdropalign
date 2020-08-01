import VueDraggableResizable from '@/components/vue-draggable-resizable'
import { mount } from '@vue/test-utils'

let wrapper

describe('position props', function () {
  it('should set the initial position of the element using `x` and `y` props', function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        x: 200,
        y: 150
      }
    })

    expect(wrapper.props().x).to.equal(200)
    expect(wrapper.props().y).to.equal(150)
    wrapper.vm.$nextTick(_ => {
      expect(wrapper.vm.$el.style.left).to.equal('200px')
      expect(wrapper.vm.$el.style.top).to.equal('150px')
    })
  })

  it('should react to position prop changes', async function () {
    wrapper = mount(VueDraggableResizable, {
      propsData: {
        x: 200,
        y: 150
      }
    })

    await wrapper.setProps({ x: 250, y: 200 })

    expect(wrapper.vm.$el.style.left).to.equal('250px')
    expect(wrapper.vm.$el.style.top).to.equal('200px')
  })

  afterEach(() => wrapper.destroy())
})
