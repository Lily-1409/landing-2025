import * as am5 from '@amcharts/amcharts5'
import * as am5venn from '@amcharts/amcharts5/venn.js'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated.js'
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive.js'

export const useVennDiagram = () => {
  const initVennDiagram = () => {
    const root = am5.Root.new('chartdiv')

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.verticalLayout,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
      })
    )

    // Create venn series
    const chart = container.children.push(
      am5venn.Venn.new(root, {
        categoryField: 'name',
        valueField: 'value',
        intersectionsField: 'sets'
      })
    )

    // Set tooltip content
    chart.slices.template.setAll({
      strokeOpacity: 1,
      strokeWidth: 10,
      stroke: am5.color(0xeaf03c),
      fill: am5.color(0xeaf03c),
      templateField: 'sliceSettings'
    })

    // Set up hover appearance
    chart.hoverGraphics.setAll({
      stroke: am5.color(0xeaf03c),
      shadowColor: am5.color(0x000000),
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 10,
      shadowOpacity: 1
    })
    //

    chart.labels.template.setAll({
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      text: '{category}',
      textAlign: 'center',
      templateField: 'labelSettings'
    })

    //Set data
    chart.data.setAll([
      {
        name: 'Продуктовая\nчасть',
        value: 10
      },
      {
        name: 'Техническая\nчасть',
        value: 10
      },
      {
        name: 'Рынок',
        value: 10
      },
      {
        name: 'Решение:\nПродукт/\nсервис',
        value: 3,
        sets: ['Продуктовая\nчасть', 'Техническая\nчасть'],
        sliceSettings: { fill: am5.color(0xdf0034), strokeWidth: 0 },
        labelSettings: { fill: am5.color(0xffffff) }
      },
      {
        name: 'Product\nMarket fit',
        value: 3,
        sets: ['Продуктовая\nчасть', 'Рынок'],
        sliceSettings: { fill: am5.color(0xdf0034), strokeWidth: 0 },
        labelSettings: { fill: am5.color(0xffffff) }
      },
      {
        name: 'Актуальные\nтехнологии',
        value: 3,
        sets: ['Техническая\nчасть', 'Рынок'],
        sliceSettings: { fill: am5.color(0xdf0034), strokeWidth: 0 },
        labelSettings: { fill: am5.color(0xffffff) }
      },
      {
        name: 'Идеальный\nпродукт',
        value: 1,
        sets: ['Продуктовая\nчасть', 'Техническая\nчасть', 'Рынок'],
        sliceSettings: {
          fill: am5.color(0x012dd4),
          strokeWidth: 0,
          stroke: am5.color(0x012dd4)
        },
        labelSettings: { fill: am5.color(0xffffff) }
      }
    ])

    const responsive = am5themes_Responsive.newEmpty(root)

    responsive.addRule({
      relevant: function (width) {
        return width >= 641
      },
      applying: function () {
        chart.labels.template.setAll({
          fontSize: 20
        })
      }
    })

    responsive.addRule({
      relevant: function (width) {
        return width < 641 && width > 319
      },
      applying: function () {
        chart.labels.template.setAll({
          fontSize: 12
        })
      }
    })

    responsive.addRule({
      relevant: function (width) {
        return width <= 319
      },
      applying: function () {
        chart.labels.template.setAll({
          fontSize: 10
        })
      }
    })

    root.setThemes([am5themes_Animated.new(root), responsive])
  }

  return { initVennDiagram }
}
