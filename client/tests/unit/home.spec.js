import { shallowMount } from '@vue/test-utils'
import home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('Home title', () => {
    const title = 'All Posts'
    const wrapper = shallowMount(home, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
